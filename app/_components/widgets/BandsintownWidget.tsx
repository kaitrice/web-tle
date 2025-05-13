'use client'
import React, { useEffect } from "react"

type Props = {
	max: string
}

export default function BandsintownWidget({ max }: Props) {
    useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://widgetv3.bandsintown.com/main.min.js';
		script.async = true;
		script.charset = 'utf-8';
		document.body.appendChild(script);
	}, []);

    return (
        <section>
            <a className="bit-widget-initializer"

            data-artist-name="id_15591806"
                
            data-events-to-display=""
            data-background-color="rgba(255,237,212,0)"
            data-separator-color="rgba(221,221,221,1)"
            data-text-color="rgba(29,41,61,1)"
            data-font=""
            data-auto-style="true"

            data-button-label-capitalization="uppercase"
            data-header-capitalization="uppercase"
            data-location-capitalization="capitalize"
            data-venue-capitalization="capitalize"
            data-display-local-dates="false"
            data-local-dates-position="tab"
            data-display-past-dates="true"
            data-display-details="false"
            data-display-lineup="false"
            data-display-start-time="false"
            data-social-share-icon="true"
            data-display-limit={max}

            data-date-format="MMM. DD YYYY"
            data-date-orientation="vertical"
            data-date-border-color="rgba(29,41,61,1)"
            data-date-border-width="1px"
            data-date-capitalization="uppercase"
            data-date-border-radius="10px"

            data-event-ticket-cta-size="medium"
            data-event-custom-ticket-text="Sold Out"
            data-event-ticket-text="TICKETS"
            data-event-ticket-icon="false"
            data-event-ticket-cta-text-color="rgba(255,255,255,1)"
            data-event-ticket-cta-bg-color="rgba(126,42,12,1)"
            data-event-ticket-cta-border-color="rgba(74,74,74,1)"
            data-event-ticket-cta-border-width="0px"
            data-event-ticket-cta-border-radius="2px"

            data-sold-out-button-text-color="rgba(255,255,255,1)"
            data-sold-out-button-background-color="rgba(74,74,74,1)"
            data-sold-out-button-border-color="rgba(74,74,74,1)"
            data-sold-out-button-clickable="false"

            data-event-rsvp-position="left"
            data-event-rsvp-cta-size="medium"
            data-event-rsvp-only-show-icon="false"
            data-event-rsvp-text="RSVP"
            data-event-rsvp-icon="false"
            data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
            data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
            data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
            data-event-rsvp-cta-border-width="1px"
            data-event-rsvp-cta-border-radius="2px"

            data-follow-section-position="hidden"
            data-follow-section-alignment="center"
            data-follow-section-header-text="Get updates on new shows, new music, and more"
            data-follow-section-cta-size="medium"
            data-follow-section-cta-text="FOLLOW"
            data-follow-section-cta-icon="false"
            data-follow-section-cta-text-color="rgba(255,255,255,1)"
            data-follow-section-cta-bg-color="rgba(74,74,74,1)"
            data-follow-section-cta-border-color="rgba(74,74,74,1)"
            data-follow-section-cta-border-width="0px"
            data-follow-section-cta-border-radius="2px"

            data-play-my-city-position="bottom"
            data-play-my-city-alignment="center"
            data-play-my-city-header-text="Don’t see a show near you?"
            data-play-my-city-cta-size="medium"
            data-play-my-city-cta-text="PLAY MY CITY"
            data-play-my-city-cta-icon="false"
            data-play-my-city-cta-text-color="rgba(255,255,255,1)"
            data-play-my-city-cta-bg-color="rgba(74,74,74,1)"
            data-play-my-city-cta-border-color="rgba(74,74,74,1)"
            data-play-my-city-cta-border-width="0px"
            data-play-my-city-cta-border-radius="2px"

            data-optin-font=""
            data-optin-text-color=""
            data-optin-bg-color=""
            data-optin-cta-text-color=""
            data-optin-cta-bg-color=""
            data-optin-cta-border-width=""
            data-optin-cta-border-radius=""
            data-optin-cta-border-color=""

            data-language="en"
            data-layout-breakpoint="900"
            data-app-id=""
            data-affil-code=""
            data-bit-logo-position="hidden"
            data-bit-logo-color="rgba(29,41,61,1)"
            
            ></a>
        </section>
    )
}

