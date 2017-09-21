// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-onbeforelogout.js.
import { name as packageName } from "meteor/liberation:meteor-onbeforelogout";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-onbeforelogout - example', function (test) {
  test.equal(packageName, "meteor-onbeforelogout");
});
