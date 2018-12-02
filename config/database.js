if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://sagar:sagar123@ds123664.mlab.com:23664/vidjot-prod'}
}
else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}