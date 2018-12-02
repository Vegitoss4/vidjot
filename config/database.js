if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://Sagar:Vegito@ss4@ds123624.mlab.com:23624/vidjot-prod'}
}
else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}