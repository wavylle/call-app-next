import React from 'react'
import { Button } from "@/components/ui/button"
import AddCampaignDialog from "@/components/global/AddCampaignDialog";

const NoCampaignsCreatedDiv = () => {
  return (
    <div
    className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
    >
    <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
        You have no campaigns
        </h3>
        <p className="text-sm text-muted-foreground">
        Create a campaign to start making calls
        </p>
        <AddCampaignDialog trigger={<Button className="mt-4">Create Campaign</Button>} />
    </div>
    </div>
  )
}

export default NoCampaignsCreatedDiv
