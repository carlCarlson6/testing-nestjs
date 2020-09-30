import { Module } from '@nestjs/common';
import { createConnection } from 'typeorm';

@Module({})
export class Database {
    constructor() {
        this.Connect();
    }

    async Connect() {
        await createConnection(
            {
                type: 'postgres',
                host: process.env.psql_host,
                port: parseInt(process.env.psql_port),
                synchronize: (process.env.psql_synchronize == "true"),
                logging: true,
                url: process.env.psql_url,
                ssl: true,
                extra: {
                    ssl: {
                        rejectUnauthorized: false
                    }
                },
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
            }
        ).then(() => console.log('connected to DB'))
    }
}
