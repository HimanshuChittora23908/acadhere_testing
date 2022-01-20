const baseUrl = "https://backend-clg-app.herokuapp.com";

const apiEndPoints = {
  getContestList: "/cp_reminder",
  getHackathonList: "/hackathons",
  getNoticeBoardList: "/notice_board",
  getClassroomList: "https://classroom.googleapis.com/v1/courses",
};

export async function getContestList(params) {
  try {
    const res = (
      await fetch(
        baseUrl + apiEndPoints.getContestList + `?pg=${params.id}`
      ).then((res) => res.json())
    ).contest;
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getHackathonList(params) {
  try {
    const res = (
      await fetch(
        baseUrl + apiEndPoints.getHackathonList + `?pg=${params.id}`
      ).then((res) => res.json())
    ).contest;
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getNoticeBoardList(params) {
  try {
    const res = (
      await fetch(
        baseUrl + apiEndPoints.getNoticeBoardList + `?pg=${params.id}`,
        {
          headers: { email: "2020kucp1023@iiitkota.ac.in" },
        }
      ).then((res) => res.json())
    ).messages;
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getClassroomList(params) {
  try {
    const res = await fetch(apiEndPoints.getClassroomList, {
      headers: { Authorization: `Bearer ${params.token}` },
    }).then((res) => res.json()).data.courses;
    return res;
  } catch (error) {
    console.log(error);
  }
}
