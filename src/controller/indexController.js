const fs = require('fs');

module.exports = {
    index: function (req, res, next) {
        const knowledge = JSON.parse(fs.readFileSync(__dirname + '/../database/technologies.json', 'utf8'));
        const certificates = JSON.parse(fs.readFileSync(__dirname + '/../database/certificates.json', 'utf8'));
        const projects = JSON.parse(fs.readFileSync(__dirname + '/../database/projects.json', 'utf8'));
        res.render('index', {
            title: 'Portfolio', 
            backEnd: knowledge.back,
            frontEnd: knowledge.front,
            tools: knowledge.tools,
            certificates: certificates,
            projects: projects
        });
    },
};
