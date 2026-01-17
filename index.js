require("datejs");
function combineUsers(...args) {
  // This is the object we will return
  const combinedObject = {
    users: []
  };

  // Go through each array of usernames
  args.forEach((userArray) => {
    // Merge the usernames into the users list
    combinedObject.users = [...combinedObject.users, ...userArray];
  });

  // Add today's date in the required format
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};