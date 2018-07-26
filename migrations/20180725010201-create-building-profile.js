'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return  [queryInterface.addColumn(
        //       'BuildingMembers',
        //       'bio',
        //      Sequelize.TEXT
        //     ),
        //     queryInterface.addColumn(
        //         'BuildingMembers',
        //         'unit',
        //         Sequelize.STRING
        //     )
        // ]
    },
    down: (queryInterface, Sequelize) => {
         // return  [queryInterface.removeColumn(
         //     'BuildingMembers',
         //     'bio'
         // ),
         //     queryInterface.removeColumn(
         //         'BuildingMembers',
         //         'unit'
         //     )];
    }
};