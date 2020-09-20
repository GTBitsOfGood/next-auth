"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSchema = exports.User = void 0;

class User {
  constructor(profile) {
    if (profile) {
      if (profile.name) {
        this.name = profile.name;
      }

      if (profile.email) {
        this.email = profile.email;
      }

      if (profile.image) {
        this.image = profile.image;
      }

      if (profile.emailVerified) {
        var currentDate = new Date();
        this.emailVerified = currentDate;
      }
    }
  }

}

exports.User = User;
var UserSchema = {
  name: 'User',
  target: User,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar',
      nullable: true
    },
    email: {
      type: 'varchar',
      unique: true,
      nullable: true
    },
    emailVerified: {
      type: 'timestamp',
      nullable: true
    },
    image: {
      type: 'varchar',
      nullable: true
    },
    createdAt: {
      type: 'timestamp',
      createDate: true
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true
    }
  }
};
exports.UserSchema = UserSchema;