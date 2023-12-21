const { db } = require('@vercel/postgres');
const { events, themes } = require('../lib/placeholder-data');



async function seedEvents(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid_ossp"`;
    const createTableEvents = client.sql`CREATE TABLE IF NOT EXISTS events (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      venue TEXT NOT NULL,
      description TEXT NOT NULL,
      datetime VARCHAR(255) NOT NULL,
      timezone VARCHAR(255) NOT NULL,
      are_seats_available BOOLEAN NOT NULL DEFAULT true,
      is_registered BOOLEAN NOT NULL DEFAULT false,
      is_bookmarked BOOLEAN NOT NULL DEFAULT false,
      img_url TEXT NOT NULL,
    )`;
    console.log('Created "events" table');
    const insertedEvents = await Promise.all(
      events.map((event) => {
        return client.sql`
        INSERT INTO events (name,description,venue,datetime,timezone,are_seats_available,is_registered,is_bookmakred,img_url)
        VALUES (${event.name},${event.description},${event.venue},${event.datetime},${event.timezone},${event.are_seats_available},${event.is_registered},${event.is_bookmarked},${event.img_url})
        ON CONFLICT (id) DO NOTHING`;
      })
    );
    console.log(`Seeded ${events.length} Events`);
    return {
      createTableEvents, insertedEvents
    };
  } catch (error) {
    console.error('Error seeding Events:', error);
    throw error;
  }
}

async function seedThemes(client) {
  try {
    const createTableThemes = client.sql`CREATE TABLE IF NOT EXISTS themes (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      color_hex_code VARCHAR(255) NOT NULL,
      is_active BOOLEAN NOT NULL DEFAULT false,
    )`;
    console.log('Created "themes" table');
    const insertedThemes = await Promise.all(
      themes.map((theme) => {
        return client.sql`
        INSERT INTO themes (color_hex_code,is_active)
        VALUES (${theme.color_hex_code},${theme.is_active})
        ON CONFLICT (id) DO NOTHING`;
      })
    );
    console.log(`Seeded ${themes.length} Themes`);
    return {
      createTableThemes, insertedThemes
    };
  } catch (error) {
    console.error('Error seeding Themes:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedEvents(client);
  await seedThemes(client);

  await client.end();

};

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
