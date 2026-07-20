const assert = require('assert');
const { createUser, authenticateUser, saveSession, loadUserState, getAdaptiveQueue } = require('../backend');

const userA = createUser('Alice');
const userB = createUser('Bob');

assert.notStrictEqual(userA.id, userB.id, 'different users should get different ids');
assert.strictEqual(authenticateUser(userA.id, 'Alice').id, userA.id, 'authentication should return user A');
assert.strictEqual(authenticateUser(userB.id, 'Bob').id, userB.id, 'authentication should return user B');

const sessionA = saveSession(userA.id, 'Chapter 1: Insurance Basics and Principles', [{ id: 'q1' }, { id: 'q2' }], [{ id: 'q1', correct: true }, { id: 'q2', correct: false }]);
assert.strictEqual(sessionA.userId, userA.id, 'session should belong to user A');

const stateA = loadUserState(userA.id);
assert.ok(stateA.practiceHistory.length >= 1, 'user A should have history');
assert.strictEqual(stateA.practiceHistory[0].chapter, 'Chapter 1: Insurance Basics and Principles');

const stateB = loadUserState(userB.id);
assert.strictEqual(stateB.practiceHistory.length, 0, 'user B should not see user A history');

const queueA = getAdaptiveQueue(userA.id, 'Chapter 1: Insurance Basics and Principles', 5);
assert.ok(queueA.length > 0, 'adaptive queue should be generated for user A');

const queueB = getAdaptiveQueue(userB.id, 'Chapter 1: Insurance Basics and Principles', 5);
assert.ok(queueB.length > 0, 'adaptive queue should be generated for user B');

console.log('backend tests passed');
