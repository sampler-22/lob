import supertest from "supertest";
import server from "../src/server";
import http from "http";
import dotenv from "dotenv";

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

describe("Testing address", () => {
    let request, app, stored;
    const baseUrl = process.env.API_BASE_URL + "/address";
    const _address = {
        line1: "123 main street",
        line2: "",
        city: "New York",
        state: "NY",
        zip: "11430"
    }

    beforeAll(async (done) => {
        app = http.createServer(server);
        app.listen(process.env.PORT, done);

        request = supertest(app);
    });

    afterAll((done) => {
        app.close(done);
    });

    test("Get all addresses", (done) => {
        request.get(baseUrl).then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.data.length).toBe(8);
            done();
        });
    });

    test("Add data", (done) => {
        request
            .post(baseUrl)
            .send({
                line1: _address.line1,
                line2: _address.line2 ? _address.line2 : "",
                city: _address.city,
                state: _address.state,
                zip: _address.zip,
            })
            .then((res) => {
                expect(res.status).toBe(200);
                stored = res.body.data;
                done();
            });
    });

    test("Add second data", (done) => {
        request
            .post(baseUrl)
            .send({
                line1: "345 fast ave",
                line2: "10",
                city: "San Francisco",
                state: "CA",
                zip: 94116,
            })
            .then((res) => {
                expect(res.status).toBe(200);
                done();
            });
    });

    test("Reject duplicate data", (done) => {
        request
            .post(baseUrl)
            .send({
                line1: _address.line1,
                line2: _address.line2 ? _address.line2 : "",
                city: _address.city,
                state: _address.state,
                zip: _address.zip,
            })
            .then((res) => {
                expect(res.status).toBe(400);
                done();
            });
    });

    test("Get address by id", (done) => {
        request.get(`${baseUrl}/${stored.id}`).then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.data.fullAddress).toBe(stored.fullAddress);
            done();
        });
    });

    test("update stored address line2", (done) => {
        const modified = stored;
        modified.line2 += 'update';
        request.put(`${baseUrl}/${stored.id}`)
        .send({
            line1: modified.line1,
            line2: modified.line2 ? modified.line2 : "",
            city: modified.city,
            state: modified.state,
            zip: modified.zip,
        })
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.data[0]).toBe(1);
            done();
        });
    });

    test("remove address", (done) => {
        request.delete(`${baseUrl}/${stored.id}`)
        .then((res) => {
            expect(res.status).toBe(200);
            done();
        });
    });

    test("filter address", (done) => {
        const fval = "1600";

        request.get(`${baseUrl}/filter/${fval}`)
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.data.length).toBe(3);
            done();
        });
    });

});
