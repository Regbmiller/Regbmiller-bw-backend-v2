
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) =>{
        table.increments()
        table.text('username', 128).notNull().unique().index();
        table.text('password', 256).notNull()
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
