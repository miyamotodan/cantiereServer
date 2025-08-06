# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server (runs `node ./src/server.js`)
- Server runs on port 3000 by default (configurable via PORT environment variable)

### Database
- Database is SQLite stored in `./database.sqlite`
- Tables are auto-synced on server start using Sequelize ORM
- No migration system is currently in place

## Architecture

This is a Node.js REST API server for construction site management ("cantiere" means construction site in Italian).

### Core Structure
- **MVC Pattern**: Controllers handle business logic, Models define data structure, Routes define endpoints
- **ORM**: Sequelize with SQLite for data persistence
- **Framework**: Express.js with ES6 modules

### Domain Model
The application manages construction projects with complex relationships:

**Primary Entities:**
- `Cantiere` (Construction Site) - Main project entity
- `Ditta` (Company) - Companies involved in projects  
- `Operaio` (Worker) - Individual workers
- `LavorazioneAnagrafica` (Work Type Registry) - Master list of work types
- `StrumentoAnagrafica` (Tool Registry) - Master list of tools

**Project Planning:**
- `LavorazioneProgetto` - Specific work activities for a project
- `PianoLavoro` (Work Plan) - Planning documents for construction sites
- `AttivitaPianificata` (Planned Activity) - Individual planned activities

**Execution Tracking:**
- `PartecipazioneDitta` - Junction table for company participation in projects
- `Assegnazione` (Assignment) - Worker assignments to specific activities
- `UtilizzoStandard` (Standard Usage) - Standard tool usage patterns for work types

### Key Relationships
- Companies participate in multiple construction sites (many-to-many)
- Workers belong to companies but are assigned to specific activities
- Work plans contain multiple planned activities
- Each planned activity references a project-specific work type
- Assignments link workers to activities through company participation

### API Endpoints
All entities follow RESTful patterns:
- `GET /{entity}` - List all
- `GET /{entity}/:id` - Get by ID
- `POST /{entity}` - Create new
- `PUT /{entity}/:id` - Update existing
- `DELETE /{entity}/:id` - Delete

Entity endpoints use Italian names:
- `/cantieri` - Construction sites
- `/ditte` - Companies
- `/operai` - Workers
- `/lavorazioni-anagrafica` - Work type registry
- `/strumenti-anagrafica` - Tool registry
- `/lavorazioni-progetto` - Project work activities
- `/piani-lavoro` - Work plans
- `/attivita-pianificata` - Planned activities
- `/partecipazioni-ditta` - Company participations
- `/assegnazioni` - Worker assignments
- `/utilizzi-standard` - Standard tool usage

### Model Relationships Setup
All Sequelize model associations are defined in `src/server.js` in the `startServer()` function before database sync. This centralized approach ensures all relationships are established before the database schema is created.