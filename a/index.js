var fs = require('fs');
var path = require('path');

function findName(folder,file) {
    fs.readdir(folder, function (err, lists) {
        lists.map(function (val) {
            var b = path.join(folder,val);
            fs.stat(b, function (err,stats) {
                if(stats.isDirectory()){
                    if (b != '/Users/tuananh/Desktop/demo/a/.DS_Store')
                    findName(b,file);
                }
                if(stats.isFile()){
                    if(val == file) {
                        console.log('có file tên là ' + file + " nằm ở " + folder);
                    }
                }
            })
        })
    })
}
findName(path.resolve(__dirname,'..'),'fs.js');