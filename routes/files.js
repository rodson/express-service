var express = require('express');
var router = express.Router();

var files = [
  {
    fid: 0,
    name: 'file1',
    type: 'png',
    size: '20KB',
    updatedAt: '2015-01-20 19:21'
  },
  {
    fid: 1,
    name: 'file2',
    type: 'jpg',
    size: '30KB',
    updatedAt: '2015-01-23 19:21'
  },
  {
    fid: 2,
    name: 'file3',
    type: 'ppt',
    size: '200KB',
    updatedAt: '2015-01-20 11:21'
  },
  {
    fid: 3,
    name: 'file4',
    type: 'word',
    size: '120KB',
    updatedAt: '2015-01-24 13:21'
  },
  {
    fid: 4,
    name: 'file5',
    type: 'mp3',
    size: '20KB',
    updatedAt: '2015-01-20 19:21'
  }
];

var file = {
  name: '测试文件ppt',
  images: [
    {
      url: 'images/image0.png',
      width: 1024,
      height: 768
    },
    {
      url: 'images/image1.png',
      width: 1024,
      height: 768
    },
    {
      url: 'images/image2.png',
      width: 1024,
      height: 768
    },
    {
      url: 'images/image3.png',
      width: 1024,
      height: 768
    },
    {
      url: 'images/image4.png',
      width: 1024,
      height: 768
    }
  ]
};

router.get('/', function(req, res, next) {
  res.json(files);
});

router.get('/:fileId', function(req, res, next) {
  res.json(file);
});

router.post('/', function(req, res, next) {
  console.log(req.files);
  res.json({message: 'success'});
});


module.exports = router;
