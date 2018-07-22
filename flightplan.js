var plan = require('flightplan')

var privateKey = process.env.DEPLOY_KEY || '/home/alberto/.ssh/deploy_rsa'
var currentTime = new Date()
var tmpDir = '/tmp/killtypo'
var deployDir = '/data/www/killtypo.com'
var formattedCurrentTime = '' +
  currentTime.getFullYear() +
  pad(currentTime.getMonth() + 1) +
  pad(currentTime.getDate()) +
  currentTime.getHours() +
  currentTime.getMinutes() +
  currentTime.getSeconds() +
  currentTime.getMilliseconds()

function pad (n) {
  return (n < 10) ? ('0' + n) : n
}

// configuration
plan.target('production', {
  host: '52.208.104.124',
  port: '22',
  username: 'deploy',
  privateKey: privateKey
})

plan.remote('deploy', function (remote) {
  remote.log('========== Ensure clean tmp folder==========')
  remote.rm('-rf ' + tmpDir)
  remote.mkdir(tmpDir)
})

plan.local('deploy', function (local) {
  var filesToCopy = local.find('dist/ -type f', { silent: true }).stdout.split('\n')

  local.log('========== Starting transfer ==========')
  local.transfer(filesToCopy, tmpDir)
})

plan.remote('deploy', function (remote) {
  var release

  release = deployDir + '/releases/' + formattedCurrentTime

  remote.log('========== Creating release folder ==========')
  remote.mkdir('-p ' + release)
  remote.log('========== Moving release to releases folder ==========')
  remote.cp('-a ' + tmpDir + '/dist/. ' + release + '/')
  remote.log('========== Remove old Symlink ==========')
  remote.rm('-rf ' + deployDir + '/current')
  remote.log('========== Creating new Symlink ==========')
  remote.exec('ln -s ' + release + ' ' + deployDir + '/current')
  remote.log('========== Keep only last 3 releases ==========')
  remote.exec('ls -d -1tr ' + deployDir + '/releases/* | head -n -3 | xargs -d "\n" rm -rf')
  remote.log('========== Cleaning tmp ==========')
  remote.rm('-rf ' + tmpDir)
})
