"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkDelete('Addresses', null, {});

        await queryInterface.bulkInsert(
            "Addresses",
            [
              {
                "line1": "Massachusetts Hall",
                "line2": "",
                "city": "Cambridge",
                "state": "MA",
                "zip": "02138",
                "fullAddress": "Massachusetts Hall Cambridge MA 02138"
              },
              {
                "line1": "3400 N. Charles St.",
                "line2": "",
                "city": "Baltimore",
                "state": "MD",
                "zip": "21218",
                "fullAddress": "3400 N. Charles St. Baltimore MD 21218"
              },
              {
                "line1": "Roosevelt Way NE",
                "line2": "",
                "city": "Seattle",
                "state": "WA",
                "zip": "98115",
                "fullAddress": "Roosevelt Way NE Seattle WA 98115"
              },
              {
                "line1": "1600 Holloway Ave",
                "line2": "",
                "city": "San Francisco",
                "state": "CA",
                "zip": "94132",
                "fullAddress": "1600 Holloway Ave San Francisco CA 94132"
              },
              {
                "line1": "1600 Holloway Ave",
                "line2": "Suite 10",
                "city": "San Francisco",
                "state": "CA",
                "zip": "94132",
                "fullAddress": "1600 Holloway Ave Suite 10 San Francisco CA 94132"
              },
              {
                "line1": "1600 Holloway Ave",
                "line2": "Suite 20",
                "city": "San Francisco",
                "state": "CA",
                "zip": "94132",
                "fullAddress": "1600 Holloway Ave Suite 20 San Francisco CA 94132"
              },
              {
                "line1": "500 S State St",
                "line2": "",
                "city": "Ann Arbor",
                "state": "MI",
                "zip": "48109",
                "fullAddress": "500 S State St Ann Arbor MI 48109"
              },
              {
                "line1": "185 Berry St",
                "line2": "Suite 6100",
                "city": "San Francisco",
                "state": "CA",
                "zip": "94107",
                "fullAddress": "185 Berry St Suite 6100 San Francisco CA 94107"
              }
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Addresses', null, {});
    },
};
