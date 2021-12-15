const rolledStats = [];
// on click
for (let index = 0; index < 6; index++) {
  // range between 1 and 6
  const randomVal = Math.floor(Math.random() * 6) + 1;
  // for visibility
  const stat = { id: index, value: randomVal };
  rolledStats.push(stat);
  //   but you can also just do rolledStats.push({ id: index, value: rolledStats[index] });
}

// character stats
// have dropdown available on each stat populated with rolledStats
// when a user clicks the value, use the grab the id of the rolledStat so you can set that into the character's specific stat