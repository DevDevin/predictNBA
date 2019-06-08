// var request = require("request");

// var options = {
//   method: "POST",
//   url:
//     "https://ussouthcentral.services.azureml.net/workspaces/25728ac0a79b4b5dbfac3a35d1d00490/services/20fcedfaf3da44ca95df078c6ba70b61/execute",
//   qs: { "api-version": "2.0", format: "swagger" },
//   headers: {
//     "Postman-Token": "6ea6e0f1-90b1-4f5b-a7a8-c30cea692bd9",
//     "cache-control": "no-cache",
//     Authorization:
//       "Bearer JubkNWztb3aZBqk/dF4wDEl7dRkh+G75+CP6+SOyKgzfwIreNgqETqzf7NOdTINHd5Z1bnKlDdiik4fdqn2lnw==",
//     "Content-Type": "application/json"
//   },
//   body:
//     '{\r\n        "Inputs": {\r\n                "input1":\r\n                [\r\n                    {\r\n                            \'Team\': "",   \r\n                            \'Matchup\': "",   \r\n                            \'H/A\': "1",   \r\n                            \'Pts\': "1",   \r\n                            \'FGM\': "1",   \r\n                            \'FGA\': "1",   \r\n                            \'FG%\': "1",   \r\n                            \'3PM\': "1",   \r\n                            \'3PA\': "1",   \r\n                            \'3P%\': "1",   \r\n                            \'FTM\': "1",   \r\n                            \'FTA\': "1",   \r\n                            \'FT%\': "1",   \r\n                            \'OREB\': "1",   \r\n                            \'DREB\': "1",   \r\n                            \'REB\': "1",   \r\n                            \'AST\': "1",   \r\n                            \'TOV\': "1",   \r\n                            \'STL\': "1",   \r\n                            \'BLK\': "1",   \r\n                            \'PF\': "1",   \r\n                            \'OppTeam\': "",   \r\n                            \'Matchup (2)\': "",   \r\n                            \'OppPts\': "1",   \r\n                            \'OppFGM\': "1",   \r\n                            \'OppFGA\': "1",   \r\n                            \'OppFG%\': "1",   \r\n                            \'Opp3PM\': "1",   \r\n                            \'OPP3PA\': "1",   \r\n                            \'Opp3P%\': "1",   \r\n                            \'OppFTM\': "1",   \r\n                            \'OppFTA\': "1",   \r\n                            \'OppFT%\': "1",   \r\n                            \'OppOREB\': "1",   \r\n                            \'OppDREB\': "1",   \r\n                            \'OppREB\': "1",   \r\n                            \'OppAST\': "1",   \r\n                            \'OppTOV\': "1",   \r\n                            \'OppSTL\': "1",   \r\n                            \'OppBLK\': "1",   \r\n                            \'OppPF\': "1",   \r\n                    }\r\n                ],\r\n        },\r\n    "GlobalParameters":  {\r\n    }\r\n}\r\n'
// };

// // use this function in the predict score function inside of userActions.js
// export const callPredictionModel = options => {
//   request(options, function(error, response, body) {
//     if (error) throw new Error(error);

//     console.log("score from prediction model: ", body);
//   });
// };
