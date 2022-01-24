const { src, dest } = require("gulp");

function mytask(callback) {
   // task body
   callback();
}

exports.mytask = mytask;


function copy(cb) {
    src('routes/*.js')
        .pipe(dest('copies'));
    cb();
}

exports.copy = copy;