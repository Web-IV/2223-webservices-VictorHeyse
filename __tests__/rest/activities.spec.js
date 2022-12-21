const { withServer } = require("../helpers");
const { db } = require("../../src/data");
const User = require("../../models/user");
const Participant = require("../../models/participant");
const Activity = require("../../models/activity");

const data = {
  activities: [
    {
      id: "c52bde46-9594-4a37-b9b3-01af8cd29f71",
      name: "Pretparkactiviteit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
      place: "lokaal klj",
      date: "2021-07-01 00:00:00",
      startTime: "00:00:00",
      endTime: "00:00:00",
    },
    {
      id: "c52bde46-9594-4a37-b9b3-01af8cd29f72",
      name: "Test 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
      place: "lokaal klj",
      date: "2021-07-01 00:00:00",
      startTime: "00:00:00",
      endTime: "00:00:00",
    },
    {
      id: "c52bde46-9594-4a37-b9b3-01af8cd29f73",
      name: "Test 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
      place: "lokaal klj",
      date: "2021-07-01 00:00:00",
      startTime: "00:00:00",
      endTime: "00:00:00",
    },
  ],
  participants: [
    {
      activityId: "c52bde46-9594-4a37-b9b3-01af8cd29f71",
      userId: 1,
      recordId: "c52bde46-9594-4a37-b9b3-01af8cd29f72",
    },
    {
      activityId: "c52bde46-9594-4a37-b9b3-01af8cd29f72",
      userId: 2,
      recordId: "c52bde46-9594-4a37-b9b3-01af8cd29f82",
    },
    {
      activityId: "c52bde46-9594-4a37-b9b3-01af8cd29f73",
      userId: 3,
      recordId: "c52bde46-9594-4a37-b9b3-01af8cd29f92",
    },
  ],
  users: [
    {
      id: 1,
      name: "Victor",
      auth0id: "unknown",
    },
    {
      id: 2,
      name: "Thomas",
      auth0id: "unknown",
    },
    {
      id: 3,
      name: "Emile",
      auth0id: "unknown",
    },
  ],
};

const dataToDelete = {
  activities: [1, 2, 3],
  participants: [2],
  users: [1],
};

describe("Activities", () => {
  let request;
  let sequelize;

  withServer(({ sequelize: k, request: r }) => {
    sequelize = k;
    request = r;
  });

  const url = "/api/activities";

  describe("GET /api/activities", () => {
    beforeAll(async () => {
      await User.create(data.users);
      await Participant.create(data.participants);
      await Activity.create(data.activities);
    });

    afterAll(async () => {
      await User.destroy({ where: { id: dataToDelete.users } });
      await Participant.destroy({ where: { id: dataToDelete.users } });
      await Activity.destroy({ where: { id: dataToDelete.activities } });
    });

    test("it should 200 and return all activities", async () => {
      const response = await request.get(url);
      expect(response.status).toBe(200);
      expect(response.body.count).toBe(3);
    });
  });

  describe("GET /api/activities/:id", () => {
    beforeAll(async () => {
      await User.create(data.users);
      await Participant.create(data.participants);
      await Activity.create(data.activities);
    });

    afterAll(async () => {
      await User.destroy({ where: { id: dataToDelete.users } });
      await Participant.destroy({ where: { id: dataToDelete.users } });
      await Activity.destroy({ where: { id: dataToDelete.activities } });
    });

    test("it should 200 and return the requested activity", async () => {
      const activityId = data.activities[0].id;
      const response = await request.get(`${url}/${activityId}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: "c52bde46-9594-4a37-b9b3-01af8cd29f71",
        name: "Pretparkactiviteit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
        place: "lokaal klj",
        date: "2021-07-01 00:00:00",
        startTime: "00:00:00",
        endTime: "00:00:00",
      });
    });
  });

  describe("POST /api/activities", () => {
    const activityToDelete = [];

    beforeAll(async () => {});

    afterAll(async () => {
      await Activity.destroy({ where: { id: activityToDelete } });
    });

    test("it should 201 and return the created activity", async () => {
      const response = await request.post(url).send({
        name: "Pretparkactiviteit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
        place: "lokaal klj",
        date: "2021-07-01 00:00:00",
        startTime: "00:00:00",
        endTime: "00:00:00",
      });

      expect(response.status).toBe(201);
      expect(response.body.name).toBe("Pretparkactiviteit");
      expect(response.body.description).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m."
      );
      expect(response.body.date).toBe("2021-07-01 00:00:00");
      expect(response.body.startTime).toBe("00:00:00");
      expect(response.body.endTime).toBe("00:00:00");

      activityToDelete.push(response.body.id);
    });
  });

  describe("PUT /api/activities/:id", () => {
    beforeAll(async () => {
      await Activity.create(data.activities);
    });

    afterAll(async () => {
      await Activity.destroy(data.activities);
    });

    test("it should 200 and return the updated activity", async () => {
      const response = await request.put(`${url}/4`).send({
        name: "Pretparkactiviteit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
        place: "lokaal klj",
        date: "2021-07-01 00:00:00",
        startTime: "00:00:00",
        endTime: "00:00:00",
      });

      expect(response.status).toBe(200);
      expect(response.body.name).toBe("Pretparkactiviteit");
      expect(response.body.description).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m."
      );
      expect(response.body.date).toBe("2021-07-01 00:00:00");
      expect(response.body.startTime).toBe("00:00:00");
      expect(response.body.endTime).toBe("00:00:00");
    });
  });

  describe("DELETE /api/activities/:id", () => {
    beforeAll(async () => {
      await Activity.create(data.activities);
    });

    afterAll(async () => {
      await Activity.destroy(data.activities);
    });

    test("it should 204 and return nothing", async () => {
      const response = await request.delete(`${url}/4`);
      expect(response.status).toBe(204);
      expect(response.body).toEqual({});
    });
  });
});
