const fs = require('fs');
const path = require('path');
const express = require('express');
const { createUser, authenticateUser, loadUserState, saveSession, getAdaptiveQueue } = require('./backend');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/signup', (req, res) => {
  try {
    const user = createUser(req.body.name);
    res.json({ ok: true, user });
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
});

app.post('/api/login', (req, res) => {
  try {
    const user = authenticateUser(req.body.id, req.body.name);
    res.json({ ok: true, user });
  } catch (error) {
    res.status(401).json({ ok: false, error: error.message });
  }
});

app.get('/api/state/:id', (req, res) => {
  try {
    const state = loadUserState(req.params.id);
    res.json({ ok: true, state });
  } catch (error) {
    res.status(404).json({ ok: false, error: error.message });
  }
});

app.post('/api/session', (req, res) => {
  try {
    const session = saveSession(req.body.id, req.body.chapter, req.body.questions, req.body.results);
    res.json({ ok: true, session });
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
});

app.post('/api/preferences', (req, res) => {
  try {
    const store = require('./backend').readStore();
    const user = store.users.find((entry) => entry.id === req.body.id);
    if (!user) throw new Error('User not found');
    user.preferredChapter = req.body.chapter || 'all';
    fs.writeFileSync(path.join(__dirname, 'data', 'users.json'), JSON.stringify(store, null, 2));
    res.json({ ok: true, user });
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
});

app.post('/api/adaptive', (req, res) => {
  try {
    const queue = getAdaptiveQueue(req.body.id, req.body.chapter, req.body.limit || 10);
    res.json({ ok: true, queue });
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Quiz server running on http://localhost:${port}`);
});
