// Shared read controller so every resource (Skill, Project, Credential, etc.)
// uses the same logic instead of duplicating controllers.

const getAll = (Model, defaultSort = "order") => async (req, res, next) => {
  try {
    const items = await Model.find().sort(defaultSort);
    res.json(items);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll };
