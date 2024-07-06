// @desc  Get all bootcamps
// @ Get /api/v1/bootcamps
// @access Public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success:true,msg:'Show all bootcamps'});

};

// @desc  Get a single bootcamp
// @ Get /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({success:true,msg:`Show bootcamp ${req.params.id}`});

};

// @desc  Create new bootcamp
// @ POST /api/v1/bootcamps/
// @access Private

exports.createBootcamp = (req,res, next) => {
    res.status(200).json({success:true,msg:'Create new bootcamps'});
};

// @desc  Update new bootcamp
// @ PUT /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = (req,res, next) => {
    
    res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc  Delete new bootcamp
// @ DELETE /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = (req,res, next) => {
    
    res.status(200).json({success:true,msg:`Delete bootcamp ${req.params.id}`});

};
