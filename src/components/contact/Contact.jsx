
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  LoaderCircle,
  Send,
} from 'lucide-react';

import { supabase } from '../../lib/supabase';

import './Contact.css';

const startingPoints = [
  {
    value: 'New project',
    title: 'I have a project in mind',
    description: "I know what I'd like to build.",
  },
  {
    value: 'Existing system',
    title: 'I want to improve something existing',
    description: 'I have a system or experience that needs attention.',
  },
  {
    value: 'Strategic guidance',
    title: 'I need strategic guidance',
    description: "I'd like expert input before deciding what to do.",
  },
  {
    value: 'Early-stage idea',
    title: "I have an idea, but need direction",
    description: "I'm still figuring things out, and that's okay.",
  },
];

const serviceOptions = [
  'Websites & Web Applications',
  'Software & Systems Development',
  'UI/UX & Digital Experiences',
  'Digital Strategy & Technology Advisory',
  'Not sure yet',
];

const initialForm = {
  reason: '',
  serviceInterests: [],
  description: '',
  projectLink: '',
  fullName: '',
  email: '',
  organisation: '',
  phone: '',
  contactMethod: 'Email',
  timeline: '',
  consent: false,
};

const steps = [
  'Starting point',
  'Area of interest',
  'The idea',
  'About you',
  'Review',
];

function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [reference, setReference] = useState('');

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: '',
    }));
  };

  const toggleService = (service) => {
    setForm((current) => {
      const selected = current.serviceInterests;

      if (service === 'Not sure yet') {
        return {
          ...current,
          serviceInterests: selected.includes(service)
            ? []
            : [service],
        };
      }

      const withoutNotSure = selected.filter(
        (item) => item !== 'Not sure yet'
      );

      return {
        ...current,
        serviceInterests: withoutNotSure.includes(service)
          ? withoutNotSure.filter((item) => item !== service)
          : [...withoutNotSure, service],
      };
    });

    setErrors((current) => ({
      ...current,
      serviceInterests: '',
    }));
  };

  const validateStep = () => {
    const nextErrors = {};

    if (step === 0 && !form.reason) {
      nextErrors.reason = 'Please select an option to continue.';
    }

    if (step === 1 && form.serviceInterests.length === 0) {
      nextErrors.serviceInterests = 'Please select at least one option.';
    }

    if (step === 2 && form.description.trim().length < 10) {
      nextErrors.description =
        'Please tell us a little more. At least 10 characters are needed.';
    }

    if (step === 2 && form.projectLink.trim()) {
      try {
        const url = new URL(form.projectLink);
        if (!['http:', 'https:'].includes(url.protocol)) {
          nextErrors.projectLink = 'Please enter a valid website URL.';
        }
      } catch {
        nextErrors.projectLink = 'Please enter a valid website URL.';
      }
    }

    if (step === 3) {
      if (form.fullName.trim().length < 2) {
        nextErrors.fullName = 'Please enter your name.';
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        nextErrors.email = 'Please enter a valid email address.';
      }

      if (
        ['WhatsApp', 'Phone'].includes(form.contactMethod) &&
        !form.phone.trim()
      ) {
        nextErrors.phone =
          'Please provide a phone number for your preferred contact method.';
      }

      if (!form.consent) {
        nextErrors.consent =
          'Please confirm that we may use these details to respond to your enquiry.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;

    setSubmissionError('');
    setStep((current) => Math.min(current + 1, 4));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const previousStep = () => {
    setErrors({});
    setSubmissionError('');
    setStep((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitEnquiry = async (event) => {
    event.preventDefault();

    if (!validateStep() || submitting) return;

    setSubmitting(true);
    setSubmissionError('');

    const enquiryReference = `MC-${crypto.randomUUID()
      .replaceAll('-', '')
      .slice(0, 8)
      .toUpperCase()}`;

    const enquiry = {
      reference: enquiryReference,
      reason: form.reason,
      service_interests: form.serviceInterests,
      project_description: form.description.trim(),
      project_link: form.projectLink.trim() || null,
      full_name: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      organisation: form.organisation.trim() || null,
      phone: form.phone.trim() || null,
      contact_method: form.contactMethod,
      timeline: form.timeline || null,
    };

    try {
      const { error } = await supabase
        .from('enquiries')
        .insert(enquiry);

      if (error) throw error;

      setReference(enquiryReference);
      setStep(5);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Enquiry submission failed:', error);

      setSubmissionError(
        'We could not submit your enquiry just now. Please try again. Your information has not been confirmed as received.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="brief-step">
            <span className="brief-step-number">01 / THE STARTING POINT</span>
            <h2>What brings you to us?</h2>
            <p className="brief-step-intro">
              Choose the option that best describes where you are right now.
            </p>

            <div className="brief-options">
              {startingPoints.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  className={`brief-option ${
                    form.reason === option.value ? 'selected' : ''
                  }`}
                  onClick={() => updateField('reason', option.value)}
                  aria-pressed={form.reason === option.value}
                >
                  <span className="brief-option-copy">
                    <strong>{option.title}</strong>
                    <small>{option.description}</small>
                  </span>
                  <span className="brief-option-check">
                    {form.reason === option.value && <Check size={16} />}
                  </span>
                </button>
              ))}
            </div>

            {errors.reason && (
              <p className="brief-error">{errors.reason}</p>
            )}
          </div>
        );

      case 1:
        return (
          <div className="brief-step">
            <span className="brief-step-number">02 / THE AREA OF INTEREST</span>
            <h2>What are we exploring?</h2>
            <p className="brief-step-intro">
              Select all the areas that interest you. If you're unsure, that's
              completely fine too.
            </p>

            <div className="brief-options">
              {serviceOptions.map((service) => {
                const selected = form.serviceInterests.includes(service);

                return (
                  <button
                    type="button"
                    key={service}
                    className={`brief-option brief-option-compact ${
                      selected ? 'selected' : ''
                    }`}
                    onClick={() => toggleService(service)}
                    aria-pressed={selected}
                  >
                    <span className="brief-option-copy">
                      <strong>{service}</strong>
                    </span>
                    <span className="brief-option-check">
                      {selected && <Check size={16} />}
                    </span>
                  </button>
                );
              })}
            </div>

            {errors.serviceInterests && (
              <p className="brief-error">{errors.serviceInterests}</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className="brief-step">
            <span className="brief-step-number">03 / THE IDEA</span>
            <h2>Tell us a little more.</h2>
            <p className="brief-step-intro">
              What are you hoping to achieve? Tell us about the idea, challenge
              or opportunity. You don't need all the answers yet.
            </p>

            <label className="brief-label" htmlFor="project-description">
              Your thoughts <span>*</span>
            </label>
            <textarea
              id="project-description"
              className="brief-textarea"
              rows={6}
              maxLength={5000}
              value={form.description}
              onChange={(event) =>
                updateField('description', event.target.value)
              }
              placeholder="I'd like to create... / I'm experiencing a challenge with... / I need help exploring..."
            />
            <div className="brief-field-meta">
              {errors.description && (
                <p className="brief-error">{errors.description}</p>
              )}
              <small>{form.description.length}/5000</small>
            </div>

            <label className="brief-label" htmlFor="project-link">
              Is there an existing website or project we should see?
              <span className="brief-optional">OPTIONAL</span>
            </label>
            <input
              id="project-link"
              className="brief-input"
              type="url"
              value={form.projectLink}
              onChange={(event) =>
                updateField('projectLink', event.target.value)
              }
              placeholder="https://example.com"
            />
            {errors.projectLink && (
              <p className="brief-error">{errors.projectLink}</p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="brief-step">
            <span className="brief-step-number">04 / ABOUT YOU</span>
            <h2>Who are we speaking with?</h2>
            <p className="brief-step-intro">
              Just a few details so we know how to get back to you.
            </p>

            <div className="brief-field-grid">
              <div className="brief-field full">
                <label className="brief-label" htmlFor="full-name">
                  Full name <span>*</span>
                </label>
                <input
                  id="full-name"
                  className="brief-input"
                  value={form.fullName}
                  onChange={(event) =>
                    updateField('fullName', event.target.value)
                  }
                  autoComplete="name"
                  placeholder="Your name"
                />
                {errors.fullName && (
                  <p className="brief-error">{errors.fullName}</p>
                )}
              </div>

              <div className="brief-field full">
                <label className="brief-label" htmlFor="email">
                  Email address <span>*</span>
                </label>
                <input
                  id="email"
                  className="brief-input"
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    updateField('email', event.target.value)
                  }
                  autoComplete="email"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="brief-error">{errors.email}</p>
                )}
              </div>

              <div className="brief-field">
                <label className="brief-label" htmlFor="organisation">
                  Organisation
                  <span className="brief-optional">OPTIONAL</span>
                </label>
                <input
                  id="organisation"
                  className="brief-input"
                  value={form.organisation}
                  onChange={(event) =>
                    updateField('organisation', event.target.value)
                  }
                  autoComplete="organization"
                  placeholder="Business or organisation"
                />
              </div>

              <div className="brief-field">
                <label className="brief-label" htmlFor="phone">
                  Phone number
                  <span className="brief-optional">OPTIONAL</span>
                </label>
                <input
                  id="phone"
                  className="brief-input"
                  type="tel"
                  value={form.phone}
                  onChange={(event) =>
                    updateField('phone', event.target.value)
                  }
                  autoComplete="tel"
                  placeholder="+266 ..."
                />
                {errors.phone && (
                  <p className="brief-error">{errors.phone}</p>
                )}
              </div>

              <div className="brief-field">
                <label className="brief-label" htmlFor="contact-method">
                  Preferred contact method
                </label>
                <select
                  id="contact-method"
                  className="brief-input"
                  value={form.contactMethod}
                  onChange={(event) =>
                    updateField('contactMethod', event.target.value)
                  }
                >
                  <option>Email</option>
                  <option>WhatsApp</option>
                  <option>Phone</option>
                </select>
              </div>

              <div className="brief-field">
                <label className="brief-label" htmlFor="timeline">
                  When are you hoping to begin?
                  <span className="brief-optional">OPTIONAL</span>
                </label>
                <select
                  id="timeline"
                  className="brief-input"
                  value={form.timeline}
                  onChange={(event) =>
                    updateField('timeline', event.target.value)
                  }
                >
                  <option value="">No specific timeline</option>
                  <option>As soon as possible</option>
                  <option>Within 1 month</option>
                  <option>Within 1–3 months</option>
                  <option>Within 3–6 months</option>
                  <option>More than 6 months</option>
                  <option>Just exploring</option>
                </select>
              </div>
            </div>

            <label className="brief-consent">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(event) =>
                  updateField('consent', event.target.checked)
                }
              />
              <span>
                I agree that Makhakhe & Co. may use the information I've
                provided to review and respond to this enquiry.
              </span>
            </label>

            {errors.consent && (
              <p className="brief-error">{errors.consent}</p>
            )}
          </div>
        );

      case 4:
        return (
          <div className="brief-step">
            <span className="brief-step-number">05 / REVIEW & SEND</span>
            <h2>Does everything look right?</h2>
            <p className="brief-step-intro">
              Take a moment to review your enquiry before sending it our way.
              You can go back and make changes.
            </p>

            <div className="brief-review">
              <ReviewItem
                title="Starting point"
                value={form.reason}
                onEdit={() => setStep(0)}
              />
              <ReviewItem
                title="Areas of interest"
                value={form.serviceInterests.join(', ')}
                onEdit={() => setStep(1)}
              />
              <ReviewItem
                title="Your idea"
                value={form.description}
                onEdit={() => setStep(2)}
              />
              {form.projectLink && (
                <ReviewItem
                  title="Project link"
                  value={form.projectLink}
                  onEdit={() => setStep(2)}
                />
              )}
              <ReviewItem
                title="Your details"
                value={`${form.fullName} · ${form.email}`}
                onEdit={() => setStep(3)}
              />
              <ReviewItem
                title="Preferred contact"
                value={`${form.contactMethod}${form.phone ? ` · ${form.phone}` : ''}`}
                onEdit={() => setStep(3)}
              />
            </div>

            {submissionError && (
              <p className="brief-error brief-submit-error" role="alert">
                {submissionError}
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (step === 5) {
    return (
      <main className="contact-page">
        <section className="contact-shell contact-success">
          <div className="brief-success-icon">
            <CheckCircle2 size={34} strokeWidth={1.4} />
          </div>

          <span className="brief-eyebrow">ENQUIRY RECEIVED</span>
          <h1>Thank you for starting the conversation.</h1>
          <p>
            Your enquiry has been submitted successfully. We'll review what
            you've shared and use your preferred contact method to respond.
          </p>

          <div className="brief-reference">
            <small>YOUR ENQUIRY REFERENCE</small>
            <strong>{reference}</strong>
          </div>

          <a href="/" className="brief-home-link">
            Return to homepage <ArrowRight size={16} />
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="contact-page">
      <section className="contact-shell">
        <header className="contact-heading">
          <span className="brief-eyebrow">MAKHAKHE & CO. / THE PROJECT BRIEF</span>
          <h1>
            Good ideas need <span>somewhere to begin.</span>
          </h1>
          <p>
            Whether you have a clear vision, a challenge to solve, or simply
            need a little direction, we're listening.
          </p>
        </header>

        <div className="brief-panel">
          <div className="brief-progress-header">
            <span>STEP {String(step + 1).padStart(2, '0')} OF 05</span>
            <span>{Math.round(((step + 1) / 5) * 100)}% COMPLETE</span>
          </div>

          <div
            className="brief-progress-track"
            role="progressbar"
            aria-label="Enquiry progress"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={((step + 1) / 5) * 100}
          >
            <span style={{ width: `${((step + 1) / 5) * 100}%` }} />
          </div>

          <div className="brief-step-indicators" aria-label="Form steps">
            {steps.map((label, index) => (
              <span
                key={label}
                className={index <= step ? 'active' : ''}
                title={label}
              />
            ))}
          </div>

          <form onSubmit={submitEnquiry} noValidate>
            {renderStep()}

            <div className="brief-navigation">
              {step > 0 ? (
                <button
                  type="button"
                  className="brief-back"
                  onClick={previousStep}
                  disabled={submitting}
                >
                  <ArrowLeft size={16} /> Back
                </button>
              ) : (
                <span />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  className="brief-continue"
                  onClick={nextStep}
                >
                  Continue <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="brief-continue"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <LoaderCircle className="brief-spinner" size={16} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send enquiry <Send size={15} />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        <p className="contact-reassurance">
          No pressure. No need to have everything figured out. Just a
          conversation about what's possible.
        </p>
      </section>
    </main>
  );
}

function ReviewItem({ title, value, onEdit }) {
  return (
    <div className="brief-review-item">
      <div>
        <small>{title}</small>
        <p>{value}</p>
      </div>
      <button type="button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
}

export default Contact;
