class LocationsController < ApplicationController
  before_action :set_location, only: %i[ show edit update destroy ]
  before_action :initialize_quiz, only: [:index]
  MAX_QUIZ_COUNT = 3

  # GET /locations or /locations.json
  def index
    @locations = Location.find(Location.pluck(:id).sample)
    @answers = Choice.where(location_id: @locations.id)
    session[:location_name] = @locations.name
  end
  # GET /locations/1 or /locations/1.json
  def show
  end

  # GET /locations/new
  def new
    @location = Location.new
  end

  # GET /locations/1/edit
  def edit
  end

  # POST /locations or /locations.json
  def create
    @location = Location.new(location_params)

    respond_to do |format|
      if @location.save
        format.html { redirect_to location_url(@location), notice: "Location was successfully created." }
        format.json { render :show, status: :created, location: @location }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /locations/1 or /locations/1.json
  def update
    respond_to do |format|
      if @location.update(location_params)
        format.html { redirect_to location_url(@location), notice: "Location was successfully updated." }
        format.json { render :show, status: :ok, location: @location }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /locations/1 or /locations/1.json
  def destroy
    @location.destroy!
    respond_to do |format|
      format.html { redirect_to locations_url, notice: "Location was successfully destroyed." }
      format.json { head :no_content }
    end
  end

 def judgement
    @answer_location = params[:selected_choice]
    check_answer(@answer_location)

    if session[:quiz_count] >= MAX_QUIZ_COUNT
      reset_quiz
      redirect_to result_locations_path
    else
      redirect_to root_path
    end
  end

  def result
    @final_result_flag = session[:all_correct_flag]
  end

  private

  def initialize_quiz
    session[:quiz_count] ||= 0
    session[:all_correct_flag] = true
  end

  def check_answer(answer_location)
    if session[:location_name] != answer_location
      session[:all_correct_flag] = false
    end
    session[:quiz_count] += 1
  end

  def reset_quiz
    session[:quiz_count] = 0
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_location
    @location = Location.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def location_params
    params.require(:location).permit(:name, :longitud, :latitude)
  end
end
