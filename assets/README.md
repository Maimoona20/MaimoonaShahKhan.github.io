# /assets

Drop your real PDFs into these folders using the exact filenames below
(or update the paths in `index.html` if you rename them).

```
assets/
  resume/
    resume.pdf              <- your resume
  experience/
    experience_letter.pdf   <- your experience / relieving letter
  certificates/
    security-plus.pdf       <- CompTIA Security+
    ceh.pdf                 <- Certified Ethical Hacker
    cysa-plus.pdf           <- CompTIA CySA+
```

Add or remove certificate cards in the "certifications" section of
`index.html` to match whatever's actually in this folder — each card
just needs an `href` pointing at the matching PDF.

Put screenshots for the "projects" section in `/images` and reference
them from the project cards if you want visuals instead of the plain
text cards currently there.
