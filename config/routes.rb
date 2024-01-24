Rails.application.routes.draw do
  root "locations#index"
  resources :locations do
    collection do
      post "judgement"
      get "result"
      get "final_result"
    end
  end
end
