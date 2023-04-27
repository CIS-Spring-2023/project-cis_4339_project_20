const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// bcrypt for password hashing
const bcrypt = require('bcrypt-nodejs')

// collection for org
const orgDataSchema = new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    orgid: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {
    collection: 'org'
  }
)

// collection for clients
const clientDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    firstName: {
      type: String,
      required: true
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    phoneNumber: {
      primary: {
        type: String,
        required: true
      },
      alternate: {
        type: String
      }
    },
    address: {
      line1: {
        type: String
      },
      line2: {
        type: String
      },
      city: {
        type: String,
        required: true
      },
      county: {
        type: String
      },
      zip: {
        type: String
      }
    },
    orgs: {
      type: [{ type: String, ref: 'org' }],
      required: true,
      validate: [(org) => org.length > 0, 'needs at least one org']
    }
  },
  {
    collection: 'client',
    timestamps: true
  }
)

// collection for events
const eventDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    org: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    services: [
      {
        type: String
      }
    ],
    date: {
      type: Date,
      required: true
    },
    address: {
      line1: {
        type: String
      },
      line2: {
        type: String
      },
      city: {
        type: String
      },
      county: {
        type: String
      },
      zip: {
        type: String
      }
    },
    description: {
      type: String
    },
    attendees: [
      {
        type: String,
        ref: 'client'
      }
    ]
  },
  {
    collection: 'event'
  }
)

// collection for services
const serviceDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    name: {
      type: String,
      required: true
    },
    orgs: {
      type: [{ type: String, ref: 'org' }],
      required: true,
      validate: [(org) => org.length > 0, 'needs at least one org']
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    collection: 'services'
  }
)

// collection for users
const userSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    collection: 'users'
  }
)

// hash the password using bcrypt hashSync
userSchema.methods.generateHash = function(password) {
  console.log(password)
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// checking if password is valid with bcrypt.compareSync
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


// create models from mongoose schemas
const clients = mongoose.model('client', clientDataSchema)
const orgs = mongoose.model('org', orgDataSchema)
const events = mongoose.model('event', eventDataSchema)
const services = mongoose.model('services', serviceDataSchema)
const users = mongoose.model('users', userSchema)

// package the models in an object to export
module.exports = { clients, orgs, events, services, users}
