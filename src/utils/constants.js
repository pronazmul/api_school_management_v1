//User Model Constants
const user = {
  role: ['user', 'admin'],
}

// Check Model Constants
const check = {
  protocol: ['https', 'http'],
  method: ['get', 'post', 'put', 'patch', 'delete'],
  successCodes: [200, 201, 300, 301],
  status: ['down', 'up'],
  timeOutSecond: 5,
}

// Subscription Constants
const subscriptionPlan = [
  {
    name: 'free',
    check: 5,
    email: 500,
    sms: 0,
    price: 0,
    active: true,
  },
  {
    name: 'basic',
    check: 20,
    email: 1000,
    sms: 500,
    price: 1000,
    active: true,
  },
  {
    name: 'standard',
    check: 50,
    email: 2000,
    sms: 1000,
    price: 3000,
    active: true,
  },
  {
    name: 'premium',
    check: 100,
    email: 5000,
    sms: 3000,
    price: 5000,
    active: true,
  },
]

// Module Exports
module.exports = { user, check, subscriptionPlan }
