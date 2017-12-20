Message.find({}, false, true).populate('_comments').exec(function(err, messages) {
    res.render('index.ejs', { messages: messages });
});