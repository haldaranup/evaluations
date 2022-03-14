const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: "Female",
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const branchDetail = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    IFSC: {
      type: String,
      required: true,
    },
    MICR: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const masterAccount = new mongoose.Schema(
  {
    balance: {
      type: "Number",
    },
    branchId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
  },
  {
    timestamps: true,
  }
);

const savingAccount = new mongoose.Schema(
  {
    account_number: {
      type: Number,
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    interestRate: {
      type: Number,
      required: true,
    },
    masterId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "master"
    }
  },
  {
    timestamps: true,
  }
);

const fixedAccount = new mongoose.Schema(
  {
    account_number: {
      type: Number,
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Number,
      required: true,
    },
    maturityDate: {
      type: Number,
      required: true,
    },
    interestRate: {
      type: Number,
      required: true,
    },
    masterId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "master"
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
const Branch = mongoose.model("branch", branchDetail);
const Fixed = mongoose.model("fixed", fixedAccount);
const Saving = mongoose.model("saving", savingAccount);
const Master = mongoose.model("master", masterAccount);

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    return res.send(users);
  } catch (error) {
    console.log("error:", error);
  }
});

app.listen("3000", () => {
  try {
    console.log("Listening on port 3000");
  } catch (error) {
    console.log("error:", error);
  }
});
