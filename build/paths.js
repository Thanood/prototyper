var appRoot = 'app/';
var outputRoot = 'app/dist/';
var exporSrvtRoot = 'app/export/'

module.exports = {
  root: appRoot,
  source: appRoot + 'src/**/*.ts',
  html: appRoot + 'src/**/*.html',
  css: appRoot + 'styles/**/*.css',
  json: appRoot + '**/*.json',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exporSrvtRoot,
  doc: appRoot + 'doc',
  json: appRoot + '/src/**/*.json',  
  dtsSrc: [
    './typings/**/*.d.ts',
    './custom_typings/**/*.d.ts'
  ]
}
