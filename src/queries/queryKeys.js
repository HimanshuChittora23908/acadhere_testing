const MODULE_NAME = "acadhere";

function generateKeyName(value) {
  return [MODULE_NAME, value];
}

const QUERY_KEYS = {
  GET_CONTEST_LIST: generateKeyName("get-contest-list"),
  GET_HACKATHON_LIST: generateKeyName("get-hackathon-list"),
  GET_NOTICE_BOARD_LIST: generateKeyName("get-notice-board-list"),
  GET_CLASSROOM_LIST: generateKeyName("get-classroom-list"),
};

export default QUERY_KEYS;
