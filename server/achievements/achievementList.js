//our object of achievements
module.exports = {
  achievements: [
    {
      name: "Goal Beginner",
      icon: "oneGoal.gif",
      description: "Post one goal",
      target: "numGoals",
      quantity: 1,
    }, {
      name: "Making a change",
      icon: "fiveGoals.gif",
      description: "Post five goals",
      target: "numGoals",
      quantity: 5,
    }, {
      name: "Mission accomplished",
      icon: "oneComplete.gif",
      description: "Complete one goal",
      target: "numComplete",
      quantity: 1,
    }, {
      name: "Quitter",
      icon: "fiveAbandoned.gif",
      description: "Delete five incomplete goals",
      target: "numDeletedIncomplete",
      quantity: 5,
    }, {
      name: "House Cleaning",
      icon: "fiveDeleted.gif",
      description: "Delete five complete goals",
      target: "numDeletedComplete",
      quantity: 5,
    },

  ]
};