RegisterCommand('svelte:show', function()
    SendNUIMessage({
        action = 'visibility',
        data = true
    })
    SetNuiFocus(true, true)
end)

RegisterNUICallback('hideUI', function(_, cb)
    cb({})
    SetNuiFocus(false, false)
end)