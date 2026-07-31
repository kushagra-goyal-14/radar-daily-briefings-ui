# Radar Daily Briefings

This fork renders the Markdown stories selected by the adjacent
`radar-briefings-v2` news-ranking pipeline. It organizes stories chronologically
by day and presents the pipeline's personalized scores and editorial briefings.

## Features

- Chronological edition-based browsing of curated stories and research papers.
- Dark and light theme support with a classic newspaper-style layout.
- Detailed metadata for each story including author attribution, tags, and interest scores.
- Automated daily redirection to the latest available issue.

## Development

Run the following commands to install dependencies and run the local development server.

### Prerequisites

Ensure you have Node.js installed on your machine.

### Setup

Install the project dependencies.

```bash
npm install
```

Sync the current Radar Briefings output:

```bash
npm run sync:radar
```

By default, the sync reads `../radar-briefings-v2/content/stories`. Set
`RADAR_CONTENT_DIR` to use another location. A synced snapshot remains available
when the source pipeline is not present, including in standalone builds. The
pipeline's `YYYY-MM-DD` generation folders are preserved verbatim and define the
edition date shown by the frontend.

### Run

Start the local development server.

```bash
npm run dev
```

The site will be available locally at `http://localhost:4321`.

### Build

Create a production-ready build.

```bash
npm run build
```

The compiled assets will be written to the `dist` directory.
