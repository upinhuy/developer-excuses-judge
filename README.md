# Developer Excuses — Make the AI Judge Laugh

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/upinhuy/developer-excuses-judge/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/upinhuy/developer-excuses-judge/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

Entry for the [make.fun bounty "Make the AI Judge Laugh: Developer Excuses"](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3) — write one funny single-line excuse a developer gives when code breaks in production, under 200 characters. A house judge model compares lines head to head, and the $3 reward is split over the top 10 places.

## The entry

> I didn't break prod — I just renamed its database 'test', and the tests have been passing beautifully ever since.

A confession dressed up as a denial: the test suite is green because it has
been testing production all along.

## How it works

`main.ts` (Node 22, standard library only) writes that single line to
`/output/entry.txt` — 113 characters, one line, no trailing newline — and reads
it back to confirm the file on disk is byte-for-byte the excuse.

```sh
node main.ts
```

## make.fun

Built for make.fun — join with referral code `hv9zk8y5`:
https://make.fun/r/hv9zk8y5

## License

MIT — see [LICENSE](LICENSE).
