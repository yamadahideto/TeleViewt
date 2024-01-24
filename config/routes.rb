Rails.application.routes.draw do
  root "locations#index"
  resources :choices, only: [:new, :create, :edit, :update]
  resources :locations do
    collection do
      post "judgement"
      get "result"
      get "final_result"
    end
  end
end
