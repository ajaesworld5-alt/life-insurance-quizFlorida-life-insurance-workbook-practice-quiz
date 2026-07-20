const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data', 'users.json');
const questionCatalog = [
  { id: 'q1', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q2', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q3', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q4', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q5', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q6', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q7', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q8', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q9', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q10', chapter: 'Chapter 1: Insurance Basics and Principles' },
  { id: 'q11', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q12', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q13', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q14', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q15', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q16', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q17', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q18', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q19', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q20', chapter: 'Chapter 2: Types of Life Insurance Policies' },
  { id: 'q21', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q22', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q23', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q24', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q25', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q26', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q27', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q28', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q29', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q30', chapter: 'Chapter 3: Policy Provisions, Riders, and Options' },
  { id: 'q31', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q32', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q33', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q34', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q35', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q36', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q37', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q38', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q39', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q40', chapter: 'Chapter 4: Underwriting, Premiums, and Costs' },
  { id: 'q41', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q42', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q43', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q44', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q45', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q46', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q47', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q48', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q49', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q50', chapter: 'Chapter 5: Annuities and Retirement Planning' },
  { id: 'q51', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q52', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q53', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q54', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q55', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q56', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q57', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q58', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q59', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q60', chapter: 'Chapter 6: Florida Insurance Laws and Regulations' },
  { id: 'q61', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q62', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q63', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q64', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q65', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q66', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q67', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q68', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q69', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q70', chapter: 'Chapter 7: Life Insurance Marketing and Ethics' },
  { id: 'q71', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q72', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q73', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q74', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q75', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q76', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q77', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q78', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q79', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q80', chapter: 'Chapter 8: Taxation and Estate Planning' },
  { id: 'q81', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q82', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q83', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q84', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q85', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q86', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q87', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q88', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q89', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q90', chapter: 'Chapter 9: Group Life, Business Uses, and Key Person' },
  { id: 'q91', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' },
  { id: 'q92', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' },
  { id: 'q93', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' },
  { id: 'q94', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' },
  { id: 'q95', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' },
  { id: 'q96', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' },
  { id: 'q97', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' },
  { id: 'q98', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' },
  { id: 'q99', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' },
  { id: 'q100', chapter: 'Chapter 10: Policy Replacement, Suitability, and Consumer Protection' }
];

function ensureDataFile() {
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify({ users: [] }, null, 2));
  }
}

function readStore() {
  ensureDataFile();
  return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

function writeStore(store) {
  ensureDataFile();
  fs.writeFileSync(dataFile, JSON.stringify(store, null, 2));
}

function createUser(name) {
  const cleanName = String(name || '').trim();
  if (!cleanName) throw new Error('Name is required');
  const store = readStore();
  const id = `user-${cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`;
  const user = {
    id,
    name: cleanName,
    createdAt: new Date().toISOString(),
    preferredChapter: 'all',
    stats: { totalSessions: 0, totalCorrect: 0, totalIncorrect: 0, mastery: {} },
    practiceHistory: []
  };
  store.users.push(user);
  writeStore(store);
  return user;
}

function authenticateUser(id, name) {
  const store = readStore();
  const user = store.users.find((entry) => entry.id === id && entry.name === name);
  if (!user) throw new Error('Invalid user credentials');
  return user;
}

function loadUserState(id) {
  const store = readStore();
  const user = store.users.find((entry) => entry.id === id);
  if (!user) throw new Error('User not found');
  return { ...user, practiceHistory: user.practiceHistory || [] };
}

function saveSession(id, chapter, questions, results) {
  const store = readStore();
  const user = store.users.find((entry) => entry.id === id);
  if (!user) throw new Error('User not found');
  const session = {
    id: `${id}-session-${Date.now()}`,
    userId: id,
    chapter,
    createdAt: new Date().toISOString(),
    questions,
    results
  };
  user.practiceHistory = user.practiceHistory || [];
  user.practiceHistory.unshift(session);
  user.stats.totalSessions += 1;
  user.stats.totalCorrect += results.filter((result) => result.correct).length;
  user.stats.totalIncorrect += results.filter((result) => !result.correct).length;
  results.forEach((result) => {
    const entry = user.stats.mastery[result.id] || { correct: 0, incorrect: 0 };
    if (result.correct) entry.correct += 1; else entry.incorrect += 1;
    user.stats.mastery[result.id] = entry;
  });
  writeStore(store);
  return session;
}

function getAdaptiveQueue(id, chapter, limit = 10) {
  const state = loadUserState(id);
  const filtered = questionCatalog.filter((question) => chapter === 'all' || question.chapter === chapter);
  return filtered
    .map((question) => {
      const stat = state.stats.mastery[question.id] || { correct: 0, incorrect: 0 };
      const total = stat.correct + stat.incorrect;
      const accuracy = total ? stat.correct / total : 0;
      const weakness = total === 0 ? 3 : stat.incorrect * 3 + (accuracy < 0.6 ? 2 : 0) + (stat.correct === 0 ? 2 : 0);
      return { ...question, weakness };
    })
    .sort((a, b) => b.weakness - a.weakness || a.id.localeCompare(b.id))
    .slice(0, limit);
}

module.exports = {
  readStore,
  createUser,
  authenticateUser,
  loadUserState,
  saveSession,
  getAdaptiveQueue
};
