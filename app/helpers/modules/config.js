function validate(settings, propertyName) {
    if (!settings.hasOwnProperty('project')) {
        throw new Error('settings object must have property "project"');
    }

    if (!settings.project.hasOwnProperty(propertyName)) {
        throw new Error(`settings.project object must have property "${propertyName}"`);
    }
}

function getProperty(settings, propertyName) {
    validate(settings, 'startYear');
    return settings.project[propertyName];
}

exports.getStartYear = function(settings) {
    return getProperty(settings, 'startYear');
};