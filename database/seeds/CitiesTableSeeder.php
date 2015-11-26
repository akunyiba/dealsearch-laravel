<?php

use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cities')->insert([
            ['id' => '641490', 'name' => 'Барабинск'],
            ['id' => '641510', 'name' => 'Бердск'],
            ['id' => '641600', 'name' => 'Искитим'],
            ['id' => '641630', 'name' => 'Колывань'],
            ['id' => '641680', 'name' => 'Краснообск'],
            ['id' => '641710', 'name' => 'Куйбышев'],
            ['id' => '641760', 'name' => 'Мошково'],
            ['id' => '641780', 'name' => 'Новосибирск'],
            ['id' => '641790', 'name' => 'Обь'],
            ['id' => '641800', 'name' => 'Ордынское'],
            ['id' => '641970', 'name' => 'Черепаново']
        ]);
    }
}
