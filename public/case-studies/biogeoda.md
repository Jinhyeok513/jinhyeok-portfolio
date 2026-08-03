# BioGeoDA - Australian Plant Data Integration and AI-Assisted Trait Extraction

## Overview
BioGeoDA is a UTS capstone-origin AI/data project focused on extracting plant trait information from structured datasets and OCR-ready botanical text. The public repository is a portfolio-safe reconstruction of Jinhyeok Kim's AI/NLP contribution.

## Problem
Plant traits often appear in inconsistent formats across formal databases and journal-style descriptions. The work needed cleaning, standardisation, extraction and validation so that trait information could be reviewed rather than treated as a black-box model output.

## My Role
Jinhyeok contributed across data preprocessing, trait-to-value mappings, QA example generation, TF-IDF baseline work, BERT QA integration, propagation post-processing, validation support and public demo restructuring.

## Scope
The project worked with a 1,674-species checklist. Team validation reviewed more than 2,400 AI-generated candidates and retained 844 correctly matched trait records.

## Approach
- Cleaned missing values, duplicate records, species naming inconsistencies and mixed trait formats.
- Used keyword tagging, fuzzy matching and metadata preservation for source traceability.
- Compared TF-IDF Logistic Regression with BERT-based extractive question answering.
- Rebuilt the public demo with synthetic sample data to avoid exposing private APJ material.

## Results
- TF-IDF Logistic Regression recorded 90.7% accuracy and 46.2% macro F1 in historical capstone notebooks.
- BERT QA recorded an evaluation loss of approximately 0.321 in the project documentation.
- Team validation retained 844 records after manual comparison.

## Limitations
The public demo is not a benchmark. It excludes private data, original dashboards, full OCR output and teammate-owned code. Confidence calibration was not implemented.

## Tools
Python, Pandas, Streamlit, scikit-learn, TF-IDF, Logistic Regression, BERT QA, GitHub.
