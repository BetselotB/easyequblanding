(function(){const storageKey = "tc-cookie-consent";
const consentVersion = 2;
const consentMaxAgeMs = 31536000000;

  try {
    var parsedConsent = JSON.parse(localStorage.getItem(storageKey) || 'null');
    var consentUpdatedAt = Date.parse(parsedConsent && parsedConsent.updatedAt);
    if (
      parsedConsent &&
      parsedConsent.version === consentVersion &&
      typeof parsedConsent.analytics === 'boolean' &&
      typeof parsedConsent.advertising === 'boolean' &&
      Number.isFinite(consentUpdatedAt) &&
      Date.now() - consentUpdatedAt <= consentMaxAgeMs
    ) {
      document.documentElement.dataset.consentStored = 'true';
    }
  } catch (e) {}
})();