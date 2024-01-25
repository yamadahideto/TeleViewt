Rails.application.routes.draw do
  root "locations#start_quiz"
  resources :choices, only: [:new, :create, :edit, :update]
  resources :locations do
    collection do
      post "judgement"
      get "result"
    end
  end


  match '*path', to: redirect('/'), via: :all
end
