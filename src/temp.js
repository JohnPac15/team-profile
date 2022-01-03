const jobTiltle = function(jobData) {
    if(jobData.job === 'Manager'){
        return 'Manager #1'
    }
    if(jobData.job === 'Engineer'){
        return 'Engineer #2'
    }
    if(jobData.job === 'Employee'){
        return 'Employee #3'
    }
    if(jobData.job === 'Intern'){
        return 'Intern #4'
    }
}
module.exports = jobTiltle