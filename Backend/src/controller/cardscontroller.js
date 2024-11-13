import { MongoClient } from 'mongodb';

const url = "mongodb://localhost:27017/";
const nameDB = "cardsDB";
const nameCollection = "cards";


export default class CardsController {
    async carregarCards(req, res) {
        let client;
        try {

            client = await MongoClient.connect(url);
            const dbo = client.db(nameDB);

            await dbo.collection(nameCollection).find({}).toArray().then(data => {
                res.status(200).json(data);
            });

        } catch (error) {
            res.status(500).json({ error: error.message });
        } finally {
            if (client)
                client.close();
        }
    }

    async cadastrarCards(req, res) {
        let client;
        try {
            let cardReq = req.body;

            client = await MongoClient.connect(url);
            const dbo = client.db(nameDB);

            await dbo.collection(nameCollection).insertOne(cardReq).then(data => {

                console.log("document insert");

                res.status(200).json(data);
            });

        } catch (error) {
            res.status(500).json({ error: error.message });
        } finally {
            if (client)
                client.close();
        }
    }

    async buscar(req, res) {
        let client;
        try {

            client = await MongoClient.connect(url);
            const dbo = client.db(nameDB);

            const filter = req.query.filter;
            console.log(filter);

            let query = {
                '$or': [
                    { 'cargo': { $regex: filter, "$options": "i" } },
                    { 'cidade': { $regex: filter, "$options": "i" } },
                    { 'estado': { $regex: filter, "$options": "i" } },
                    { 'regime': { $regex: filter, "$options": "i" } },
                    // { 'year': { $regex: filter } }
                ]
            };


            console.log(query);
            await dbo.collection(nameCollection).find(query).toArray().then(data => {
                console.log(data);
                res.status(200).json(data);
            });

        } catch (error) {
            res.status(500).json({ error: error.message });
        } finally {
            if (client)
                client.close();
        }
    }

}