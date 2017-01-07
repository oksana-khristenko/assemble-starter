'use strict';

module.exports = {
  build: {
    options: {
        questions: [
          {
            config: 'enviromentConfig',
            type: 'list',
            message: 'Select environment config:',
            default: 'development',
            choices: [
                {
                  value: 'development',
                  name:  'development'
                },
                {
                  value: 'production',
                  name:  'production'
                }
            ]
          }
        ]
    }
  },
  dist: {
    options: {
        questions: [
          {
            config: 'enviromentConfig',
            type: 'list',
            message: 'Select environment config:',
            default: 'production',
            choices: [
                {
                  value: 'production',
                  name:  'production'
                },
                {
                  value: 'development',
                  name:  'development'
                }
            ]
          }
        ]
    }
  }
}