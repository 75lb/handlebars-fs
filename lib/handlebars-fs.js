var fs = require("fs");
var mfs = require("more-fs");

exports["fs-appendFile"] = fs.appendFileSync;
exports["fs-chmod"] = fs.chmodSync;
exports["fs-chown"] = fs.chownSync;
exports["fs-exists"] = fs.existsSync;
exports["fs-link"] = fs.linkSync;
exports["fs-mkdir"] = fs.mkdirSync;
exports["fs-readdir"] = fs.readdirSync;
exports["fs-readlink"] = fs.readlinkSync;
exports["fs-rename"] = fs.renameSync;
exports["fs-stat"] = fs.statSync;
exports["fs-symlink"] = fs.symlinkSync;
exports["fs-truncate"] = fs.truncateSync;
exports["fs-unlink"] = fs.unlinkSync;
exports["fs-utimes"] = fs.utimesSync;
exports["fs-writeFile"] = fs.writeFileSync;
exports["fs-readFile"] = function(filename){
    if (Array.isArray(filename)){
        var filenames = filename;
        return filenames.map(function(file){
            var stat = fs.statSync(file);
            return {
                filename: file,
                content: mfs.read(file),
                modified: stat.mtime
            };
        });
    } else {
        return mfs.read(filename);
    }
};
