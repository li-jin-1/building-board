'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return  [queryInterface.addColumn(
              'BuildingMember',
              'bio',
             Sequelize.TEXT
            ),
            queryInterface.addColumn(
                'BuildingMember',
                'unit',
                Sequelize.STRING
            )
        ]
    },
    down: (queryInterface, Sequelize) => {
        return  [queryInterface.removeColumn(
            'BuildingMember',
            'bio'
        ),
            queryInterface.removeColumn(
                'BuildingMember',
                'unit'
            )];
    }
};